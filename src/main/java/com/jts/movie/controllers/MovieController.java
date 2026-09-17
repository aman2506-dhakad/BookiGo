package com.jts.movie.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jts.movie.request.MovieRequest;
import com.jts.movie.services.MovieService;

@RestController
@RequestMapping("/movie")
public class MovieController {
	
	@Autowired
    private MovieService movieService;

	@PostMapping("/addNew")
	public ResponseEntity<String> addMovie(@RequestBody MovieRequest movieRequest) {
		try {
            String result = movieService.addMovie(movieRequest);
            return new ResponseEntity<>(result, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
	}

	@org.springframework.web.bind.annotation.GetMapping("/all")
	public ResponseEntity<java.util.List<com.jts.movie.response.MovieResponse>> getAllMovies() {
		return new ResponseEntity<>(movieService.getAllMovies(), HttpStatus.OK);
	}

	@org.springframework.web.bind.annotation.DeleteMapping("/{id}")
	public ResponseEntity<String> deleteMovie(@org.springframework.web.bind.annotation.PathVariable("id") Integer id) {
		try {
			String result = movieService.deleteMovie(id);
			return new ResponseEntity<>(result, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}

	@PostMapping(value = "/uploadPoster", consumes = org.springframework.http.MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<?> uploadPoster(@org.springframework.web.bind.annotation.RequestParam("file") org.springframework.web.multipart.MultipartFile file) {
		try {
			if (file == null || file.isEmpty()) {
				return new ResponseEntity<>("Please select an image file to upload", HttpStatus.BAD_REQUEST);
			}

			String originalFilename = file.getOriginalFilename();
			String contentType = file.getContentType();
			boolean isImage = (contentType != null && contentType.startsWith("image/"))
					|| (originalFilename != null && originalFilename.matches("(?i).*\\.(jpg|jpeg|png|webp|jfif|avif|gif|bmp)$"));

			if (!isImage) {
				return new ResponseEntity<>("Only valid image files (JPG, PNG, WEBP, AVIF) can be uploaded", HttpStatus.BAD_REQUEST);
			}

			java.io.File uploadDir = new java.io.File("uploads");
			if (!uploadDir.exists()) {
				uploadDir.mkdirs();
			}

			String extension = ".jpg";
			if (originalFilename != null && originalFilename.lastIndexOf(".") != -1) {
				extension = originalFilename.substring(originalFilename.lastIndexOf(".")).toLowerCase();
			}

			String uniqueFilename = java.util.UUID.randomUUID().toString() + extension;
			java.io.File targetFile = new java.io.File(uploadDir, uniqueFilename);
			file.transferTo(targetFile.toPath());

			String fileUrl = "/uploads/" + uniqueFilename;
			java.util.Map<String, String> response = new java.util.HashMap<>();
			response.put("fileUrl", fileUrl);
			response.put("originalName", originalFilename != null ? originalFilename : uniqueFilename);

			return new ResponseEntity<>(response, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>("Image upload failed: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
